﻿using System.Collections.Generic;
using System.IO;
using SharpDox.Model;
using SharpDox.Plugins.Html.Steps;
using SharpDox.Plugins.Html.Templates.Strings;
using SharpDox.Sdk.Exporter;
using System;

namespace SharpDox.Plugins.Html
{
    public class HtmlExporter : IExporter
    {
        public event Action<string> OnRequirementsWarning;
        public event Action<string> OnStepMessage;
        public event Action<int> OnStepProgress;

        private readonly HtmlStrings _htmlStrings;
        private readonly HtmlConfig _htmlConfig;
        
        public HtmlExporter(HtmlStrings htmlStrings, HtmlConfig htmlConfig)
	    {
            _htmlStrings = htmlStrings;
            _htmlConfig = htmlConfig;
	    }

        public bool CheckRequirements() { return true; }

        public void Export(SDProject sdProject, string outputPath)
        {
            foreach (var docLanguage in sdProject.DocumentationLanguages)
            {
                StepInput.InitStepinput(sdProject, Path.Combine(outputPath, docLanguage), docLanguage, GetCurrentStrings(docLanguage, sdProject.DocLanguage), _htmlStrings, _htmlConfig);

                var steps = new List<StepBase>();
                steps.Add(new PreBuildStep(0, 10));
                steps.Add(new AssetsStep(10, 25));
                steps.Add(new CreateArticleStep(25, 50));
                steps.Add(new CreateHtmlStep(50, 100));

                foreach(var step in steps)
                {
                    step.OnStepMessage += ExecuteOnStepMessage;
                    step.OnStepProgress += ExecuteOnStepProgress;
                    step.RunStep();
                }
            }
        }

        private IStrings GetCurrentStrings(string docLanguage, string defaultLanguage)
        {
            IStrings strings = new EnStrings();
            if (docLanguage == "de" || (docLanguage == "default" && defaultLanguage == "de"))
            {
                strings = new DeStrings();
            }
            return strings;
        }

        internal void ExecuteOnStepMessage(string message)
        {
            var handler = OnStepMessage;
            if (handler != null)
            {
                handler(string.Format("({0}) - {1}", StepInput.CurrentLanguage, message));
            }
        }

        internal void ExecuteOnStepProgress(int progress)
        {
            var handler = OnStepProgress;
            if (handler != null)
            {
                handler(progress);
            }
        }

        public string ExporterName { get { return "Html"; } }
    }
}