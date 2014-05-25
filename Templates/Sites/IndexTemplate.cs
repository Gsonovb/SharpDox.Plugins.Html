﻿// ------------------------------------------------------------------------------
// <auto-generated>
//     Dieser Code wurde von einem Tool generiert.
//     Laufzeitversion: 12.0.0.0
//  
//     Änderungen an dieser Datei können falsches Verhalten verursachen und gehen verloren, wenn
//     der Code erneut generiert wird.
// </auto-generated>
// ------------------------------------------------------------------------------
namespace SharpDox.Plugins.Html.Templates.Sites
{
    using System.Linq;
    using System.Text;
    using System.IO;
    using System.Collections.Generic;
    using SharpDox.Plugins.Html.Steps;
    using MarkdownSharp;
    using System;
    
    /// <summary>
    /// Class to produce the template output
    /// </summary>
    
    #line 1 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.TextTemplating", "12.0.0.0")]
    public partial class IndexTemplate : IndexTemplateBase
    {
#line hidden
        /// <summary>
        /// Create the template output
        /// </summary>
        public virtual string TransformText()
        {
            this.Write("\r\n");
            this.Write("\r\n<!doctype html>\r\n<html class=\"index\">\r\n    <head>\r\n        <meta charset=\"utf-8" +
                    "\">\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\r\n    " +
                    "    <title>");
            
            #line 16 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(StepInput.SDProject.ProjectName));
            
            #line default
            #line hidden
            this.Write("</title>\r\n        <meta name=\"viewport\" content=\"width=device-width\">\r\n\r\n\t\t");
            
            #line 19 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
 #if DEBUG 
            
            #line default
            #line hidden
            this.Write(@"			<link rel=""stylesheet"" type=""text/css"" href=""assets/css/0-reset.css"" />
			<link rel=""stylesheet"" type=""text/css"" href=""assets/css/1-font.css"" />
			<link rel=""stylesheet"" type=""text/css"" href=""assets/css/1-font-awesome.css"" />
			<link rel=""stylesheet"" type=""text/css"" href=""assets/css/2-typography.css"" />		
			<link rel=""stylesheet"" type=""text/css"" href=""assets/css/3-markdown.css"" />			
			<link rel=""stylesheet"" type=""text/css"" href=""assets/css/3-tree.css"" />
			<link rel=""stylesheet"" type=""text/css"" href=""assets/css/layout.css"" />
			<link rel=""stylesheet"" type=""text/css"" href=""assets/css/dynamic.css"" />

			<script src=""assets/js/vendor/0-jquery.js""></script>
			<script src=""assets/js/vendor/1-jquery-ui.custom.min.js""></script>	
			<script src=""assets/js/vendor/1-jquery.layout.min.js""></script>	
			<script src=""assets/js/vendor/1-jstree.min.js""></script>	
			<script src=""assets/js/vendor/1-jquery.hashchange.min.js""></script>
		
			<script src=""assets/js/app/NavigationController.js""></script>
			<script src=""assets/js/app/index.js""></script>
		");
            
            #line 37 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
 #else 
            
            #line default
            #line hidden
            this.Write("\t\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/style.css?version=0931" +
                    "\" />\r\n\t\t\t<script src=\"assets/js/vendor.js?version=0931\"></script>\r\n\t\t\t<script sr" +
                    "c=\"assets/js/app.js?version=0931\"></script>\r\n\t\t");
            
            #line 41 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
 #endif 
            
            #line default
            #line hidden
            this.Write("\r\n\t\t<script>\r\n\t\t\tvar homeString = \"");
            
            #line 44 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(StepInput.DocStrings.Home));
            
            #line default
            #line hidden
            this.Write("\";\r\n\t\t</script>\r\n\r\n    </head>\r\n    <body>   \r\n\t\t<div class=\"ui-layout-north\">\r\n\t" +
                    "\t\t");
            
            #line 50 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
 if (String.IsNullOrEmpty(StepInput.SDProject.LogoPath))
			{
            
            #line default
            #line hidden
            this.Write("\t\t\t\t<h1 id=\"sitetitle\"><a href=\"index.html\">");
            
            #line 52 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(StepInput.SDProject.ProjectName));
            
            #line default
            #line hidden
            this.Write("</a></h1>\r\n\t\t\t");
            
            #line 53 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
}
			else
			{
            
            #line default
            #line hidden
            this.Write("\t\t\t\t<a href=\"index.html\"><img id=\"sitetitle\" src=\"");
            
            #line 56 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Path.GetFileName(StepInput.SDProject.LogoPath)));
            
            #line default
            #line hidden
            this.Write("\" title=\"");
            
            #line 56 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(StepInput.SDProject.ProjectName));
            
            #line default
            #line hidden
            this.Write("\"/></a>\r\n\t\t\t");
            
            #line 57 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
}
            
            #line default
            #line hidden
            this.Write("\t\t\t<div id=\"subtitle\"><p>");
            
            #line 58 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(StepInput.DocStrings.Home));
            
            #line default
            #line hidden
            this.Write("</p></div>\r\n\t\t</div>\r\n        <div class=\"ui-layout-south\">\r\n\t\t\t<div class=\"user-" +
                    "footer markdown\">\r\n\t\t\t\t");
            
            #line 62 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(new Markdown().Transform(StepInput.HtmlConfig.FooterLine)));
            
            #line default
            #line hidden
            this.Write("\r\n\t\t\t</div>\r\n\t\t\t<div class=\"sd-footer\">\r\n\t\t\t\t");
            
            #line 65 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
	var project = string.Empty;
					if(!string.IsNullOrEmpty(StepInput.SDProject.ProjectUrl))
					{	
						project = "<a href=\"" + StepInput.SDProject.ProjectUrl + "\" target=\"_blank\">" + StepInput.SDProject.ProjectName + "</a>";
					}
					else
					{
						project = StepInput.SDProject.ProjectName;
					} 
					
					var author = string.Empty;
					if(!string.IsNullOrEmpty(StepInput.SDProject.AuthorUrl) && !string.IsNullOrEmpty(StepInput.SDProject.Author))
					{	
						author = StepInput.DocStrings.By + " <a href=\"" + StepInput.SDProject.AuthorUrl + "\" target=\"_blank\">" + StepInput.SDProject.Author + "</a>";
					}
					else if(!string.IsNullOrEmpty(StepInput.SDProject.Author))
					{
						author = StepInput.DocStrings.By + " " + StepInput.SDProject.Author;
					} 
            
            #line default
            #line hidden
            this.Write("\r\n\t\t\t\t ");
            
            #line 85 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(project));
            
            #line default
            #line hidden
            this.Write(" ");
            
            #line 85 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(StepInput.SDProject.VersionNumber != null ? StepInput.SDProject.VersionNumber : string.Empty));
            
            #line default
            #line hidden
            this.Write(" ");
            
            #line 85 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(author));
            
            #line default
            #line hidden
            this.Write(" - ");
            
            #line 85 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(StepInput.DocStrings.GeneratedBy));
            
            #line default
            #line hidden
            this.Write(" <a href=\"http://sharpDox.de\" target=\"_blank\">sharpDox</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n" +
                    "        <div id=\"navigation\" class=\"ui-layout-west\">\r\n\t\t\t");
            
            #line 89 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Navigation));
            
            #line default
            #line hidden
            this.Write("\r\n\t\t</div>\r\n\t\t<iframe id=\"content\" class=\"ui-layout-center\" frameborder=\"0\" width" +
                    "=\"100%\" src=\"article/home.html\"></iframe>\r\n    </body>\r\n</html>\r\n\r\n");
            return this.GenerationEnvironment.ToString();
        }
        
        #line 95 "D:\Github\SharpDox.Plugins.Html\Templates\Sites\IndexTemplate.tt"
 public string Navigation { get; set; } 
        
        #line default
        #line hidden
    }
    
    #line default
    #line hidden
    #region Base class
    /// <summary>
    /// Base class for this transformation
    /// </summary>
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.TextTemplating", "12.0.0.0")]
    public class IndexTemplateBase
    {
        #region Fields
        private global::System.Text.StringBuilder generationEnvironmentField;
        private global::System.CodeDom.Compiler.CompilerErrorCollection errorsField;
        private global::System.Collections.Generic.List<int> indentLengthsField;
        private string currentIndentField = "";
        private bool endsWithNewline;
        private global::System.Collections.Generic.IDictionary<string, object> sessionField;
        #endregion
        #region Properties
        /// <summary>
        /// The string builder that generation-time code is using to assemble generated output
        /// </summary>
        protected System.Text.StringBuilder GenerationEnvironment
        {
            get
            {
                if ((this.generationEnvironmentField == null))
                {
                    this.generationEnvironmentField = new global::System.Text.StringBuilder();
                }
                return this.generationEnvironmentField;
            }
            set
            {
                this.generationEnvironmentField = value;
            }
        }
        /// <summary>
        /// The error collection for the generation process
        /// </summary>
        public System.CodeDom.Compiler.CompilerErrorCollection Errors
        {
            get
            {
                if ((this.errorsField == null))
                {
                    this.errorsField = new global::System.CodeDom.Compiler.CompilerErrorCollection();
                }
                return this.errorsField;
            }
        }
        /// <summary>
        /// A list of the lengths of each indent that was added with PushIndent
        /// </summary>
        private System.Collections.Generic.List<int> indentLengths
        {
            get
            {
                if ((this.indentLengthsField == null))
                {
                    this.indentLengthsField = new global::System.Collections.Generic.List<int>();
                }
                return this.indentLengthsField;
            }
        }
        /// <summary>
        /// Gets the current indent we use when adding lines to the output
        /// </summary>
        public string CurrentIndent
        {
            get
            {
                return this.currentIndentField;
            }
        }
        /// <summary>
        /// Current transformation session
        /// </summary>
        public virtual global::System.Collections.Generic.IDictionary<string, object> Session
        {
            get
            {
                return this.sessionField;
            }
            set
            {
                this.sessionField = value;
            }
        }
        #endregion
        #region Transform-time helpers
        /// <summary>
        /// Write text directly into the generated output
        /// </summary>
        public void Write(string textToAppend)
        {
            if (string.IsNullOrEmpty(textToAppend))
            {
                return;
            }
            // If we're starting off, or if the previous text ended with a newline,
            // we have to append the current indent first.
            if (((this.GenerationEnvironment.Length == 0) 
                        || this.endsWithNewline))
            {
                this.GenerationEnvironment.Append(this.currentIndentField);
                this.endsWithNewline = false;
            }
            // Check if the current text ends with a newline
            if (textToAppend.EndsWith(global::System.Environment.NewLine, global::System.StringComparison.CurrentCulture))
            {
                this.endsWithNewline = true;
            }
            // This is an optimization. If the current indent is "", then we don't have to do any
            // of the more complex stuff further down.
            if ((this.currentIndentField.Length == 0))
            {
                this.GenerationEnvironment.Append(textToAppend);
                return;
            }
            // Everywhere there is a newline in the text, add an indent after it
            textToAppend = textToAppend.Replace(global::System.Environment.NewLine, (global::System.Environment.NewLine + this.currentIndentField));
            // If the text ends with a newline, then we should strip off the indent added at the very end
            // because the appropriate indent will be added when the next time Write() is called
            if (this.endsWithNewline)
            {
                this.GenerationEnvironment.Append(textToAppend, 0, (textToAppend.Length - this.currentIndentField.Length));
            }
            else
            {
                this.GenerationEnvironment.Append(textToAppend);
            }
        }
        /// <summary>
        /// Write text directly into the generated output
        /// </summary>
        public void WriteLine(string textToAppend)
        {
            this.Write(textToAppend);
            this.GenerationEnvironment.AppendLine();
            this.endsWithNewline = true;
        }
        /// <summary>
        /// Write formatted text directly into the generated output
        /// </summary>
        public void Write(string format, params object[] args)
        {
            this.Write(string.Format(global::System.Globalization.CultureInfo.CurrentCulture, format, args));
        }
        /// <summary>
        /// Write formatted text directly into the generated output
        /// </summary>
        public void WriteLine(string format, params object[] args)
        {
            this.WriteLine(string.Format(global::System.Globalization.CultureInfo.CurrentCulture, format, args));
        }
        /// <summary>
        /// Raise an error
        /// </summary>
        public void Error(string message)
        {
            System.CodeDom.Compiler.CompilerError error = new global::System.CodeDom.Compiler.CompilerError();
            error.ErrorText = message;
            this.Errors.Add(error);
        }
        /// <summary>
        /// Raise a warning
        /// </summary>
        public void Warning(string message)
        {
            System.CodeDom.Compiler.CompilerError error = new global::System.CodeDom.Compiler.CompilerError();
            error.ErrorText = message;
            error.IsWarning = true;
            this.Errors.Add(error);
        }
        /// <summary>
        /// Increase the indent
        /// </summary>
        public void PushIndent(string indent)
        {
            if ((indent == null))
            {
                throw new global::System.ArgumentNullException("indent");
            }
            this.currentIndentField = (this.currentIndentField + indent);
            this.indentLengths.Add(indent.Length);
        }
        /// <summary>
        /// Remove the last indent that was added with PushIndent
        /// </summary>
        public string PopIndent()
        {
            string returnValue = "";
            if ((this.indentLengths.Count > 0))
            {
                int indentLength = this.indentLengths[(this.indentLengths.Count - 1)];
                this.indentLengths.RemoveAt((this.indentLengths.Count - 1));
                if ((indentLength > 0))
                {
                    returnValue = this.currentIndentField.Substring((this.currentIndentField.Length - indentLength));
                    this.currentIndentField = this.currentIndentField.Remove((this.currentIndentField.Length - indentLength));
                }
            }
            return returnValue;
        }
        /// <summary>
        /// Remove any indentation
        /// </summary>
        public void ClearIndent()
        {
            this.indentLengths.Clear();
            this.currentIndentField = "";
        }
        #endregion
        #region ToString Helpers
        /// <summary>
        /// Utility class to produce culture-oriented representation of an object as a string.
        /// </summary>
        public class ToStringInstanceHelper
        {
            private System.IFormatProvider formatProviderField  = global::System.Globalization.CultureInfo.InvariantCulture;
            /// <summary>
            /// Gets or sets format provider to be used by ToStringWithCulture method.
            /// </summary>
            public System.IFormatProvider FormatProvider
            {
                get
                {
                    return this.formatProviderField ;
                }
                set
                {
                    if ((value != null))
                    {
                        this.formatProviderField  = value;
                    }
                }
            }
            /// <summary>
            /// This is called from the compile/run appdomain to convert objects within an expression block to a string
            /// </summary>
            public string ToStringWithCulture(object objectToConvert)
            {
                if ((objectToConvert == null))
                {
                    throw new global::System.ArgumentNullException("objectToConvert");
                }
                System.Type t = objectToConvert.GetType();
                System.Reflection.MethodInfo method = t.GetMethod("ToString", new System.Type[] {
                            typeof(System.IFormatProvider)});
                if ((method == null))
                {
                    return objectToConvert.ToString();
                }
                else
                {
                    return ((string)(method.Invoke(objectToConvert, new object[] {
                                this.formatProviderField })));
                }
            }
        }
        private ToStringInstanceHelper toStringHelperField = new ToStringInstanceHelper();
        /// <summary>
        /// Helper to produce culture-oriented representation of an object as a string
        /// </summary>
        public ToStringInstanceHelper ToStringHelper
        {
            get
            {
                return this.toStringHelperField;
            }
        }
        #endregion
    }
    #endregion
}
