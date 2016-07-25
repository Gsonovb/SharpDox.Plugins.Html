import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizationService} from '@angular/platform-browser';

import {ContentBase} from './ContentBase';
import {StateService} from '../../state/StateService';
import {SiteStateChanger} from '../../state/SiteStateChanger';

import {MemberComponent} from './member.component';

@Component({
    selector: 'sd-type',
    templateUrl: './templates/content/type/type.html',
    styleUrls: ['./templates/content/type/type.css'],
    directives: [MemberComponent]
})
export class TypeComponent extends ContentBase { 
    
    public currentPageData : any = {};
    
    private _routeSubscription : any;
    
    constructor(_route : ActivatedRoute,
                _sanitizer: DomSanitizationService, 
                _siteStateChanger : SiteStateChanger,                
                _stateService : StateService){ 
        super("sd-type", _sanitizer, _route, _siteStateChanger, _stateService);   
    }

    ngOnInit(){    
        this._routeSubscription = this._route.params.subscribe(params => {
            let id = params['id'];
            this._siteStateChanger.setCurrentPageToType(id);
        });
    }

    ngOnDestroy(){
        this._routeSubscription.unsubscribe();
        super.ngOnDestroy();
    }
    
}