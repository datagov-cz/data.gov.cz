import{r as e,c as o,h as i,a as l,g as a}from"./p-3336fe3b.js";import{c as r}from"./p-4029f0cb.js";import{g as t,a as f,t as s}from"./p-8a8117a5.js";import{a as n,b as d}from"./p-b24413c7.js";import{c as m}from"./p-32d89c78.js";import{d as v}from"./p-2b6bbee5.js";import{g}from"./p-7670cb34.js";import"./p-40f10385.js";import"./p-1693d6aa.js";import"./p-55e78f21.js";import"./p-e55a8f78.js";import"./p-9fa54181.js";import"./p-1e979cc8.js";const h={root:"gov-form-file",area:"gov-form-file__area",label:"gov-form-file__label",input:"gov-form-file__input",list:"gov-form-file__list",item:"gov-form-file__item",attachments:"gov-form-file__attachments"};function _(e){const o=["bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let i=0,l=parseInt(e,10)||0;while(l>=1024&&++i){l=l/1024}return l.toFixed(l<10&&i>0?1:0)+" "+o[i]}function b(e,o){if(typeof o==="string"&&o.length){return o.replace(/\s/g,"").split(",").filter((o=>new RegExp(o.replace("*",".*")).test(e.type))).length>0}else{return true}}function c(e,o){const i=Math.round(e.size);return i<=o}const p='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-file{position:relative;display:block;width:100%}.gov-form-file__label .gov-form-label__label>*:last-child{margin-bottom:0}.gov-form-file__input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0.0001;cursor:pointer}.gov-form-file__attachments{margin-top:1rem 0rem 0rem}.gov-form-file__item{display:flex;gap:1rem;align-items:center}.gov-form-file[disabled=""] .gov-form-file__label .gov-form-label__label,.gov-form-file[disabled=true i] .gov-form-file__label .gov-form-label__label,.gov-form-file[disabled="1"] .gov-form-file__label .gov-form-label__label{pointer-events:none}.gov-form-file[disabled=""] .gov-form-file__label .gov-form-label__label *,.gov-form-file[disabled=true i] .gov-form-file__label .gov-form-label__label *,.gov-form-file[disabled="1"] .gov-form-file__label .gov-form-label__label *{color:var(--gov-form-file-disabled-color, var(--gov-color-secondary-600))}.gov-form-file[expanded=""] .gov-form-file__area,.gov-form-file[expanded=true i] .gov-form-file__area,.gov-form-file[expanded="1"] .gov-form-file__area{position:relative;width:100%;padding:2rem 1.375rem 1.375rem;border:var(--gov-form-file-border, 0.0625rem dashed var(--gov-color-secondary-500));text-align:center;transition:background-color 150ms ease-in-out;will-change:background-color}.gov-form-file[expanded=""] .gov-form-file__area.highlight,.gov-form-file[expanded=true i] .gov-form-file__area.highlight,.gov-form-file[expanded="1"] .gov-form-file__area.highlight{background-color:var(--gov-color-primary-200)}.gov-form-file[expanded=""] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded=true i] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded="1"] .gov-form-file__label .gov-form-label__label{width:100%;padding:1.375rem;border:var(--gov-form-file-border, 0.0625rem dashed var(--gov-color-secondary-500));text-align:center}.gov-form-file[expanded=""] .gov-form-file__attachments,.gov-form-file[expanded=true i] .gov-form-file__attachments,.gov-form-file[expanded="1"] .gov-form-file__attachments{margin:1.5rem 0rem 0rem}.gov-form-file[expanded=""][invalid=""] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded=""][invalid=true i] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded=""][invalid="1"] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded=true i][invalid=""] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded=true i][invalid=true i] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded=true i][invalid="1"] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded="1"][invalid=""] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded="1"][invalid=true i] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded="1"][invalid="1"] .gov-form-file__label .gov-form-label__label{border-color:var(--gov-form-state-color-error, var(--gov-color-error))}.gov-form-file[expanded=""][invalid=""] .gov-form-file__area,.gov-form-file[expanded=""][invalid=true i] .gov-form-file__area,.gov-form-file[expanded=""][invalid="1"] .gov-form-file__area,.gov-form-file[expanded=true i][invalid=""] .gov-form-file__area,.gov-form-file[expanded=true i][invalid=true i] .gov-form-file__area,.gov-form-file[expanded=true i][invalid="1"] .gov-form-file__area,.gov-form-file[expanded="1"][invalid=""] .gov-form-file__area,.gov-form-file[expanded="1"][invalid=true i] .gov-form-file__area,.gov-form-file[expanded="1"][invalid="1"] .gov-form-file__area{border-color:var(--gov-form-state-color-error, var(--gov-color-error))}.gov-form-file[expanded=""][disabled=""] .gov-form-file__area,.gov-form-file[expanded=""][disabled=true i] .gov-form-file__area,.gov-form-file[expanded=""][disabled="1"] .gov-form-file__area,.gov-form-file[expanded=true i][disabled=""] .gov-form-file__area,.gov-form-file[expanded=true i][disabled=true i] .gov-form-file__area,.gov-form-file[expanded=true i][disabled="1"] .gov-form-file__area,.gov-form-file[expanded="1"][disabled=""] .gov-form-file__area,.gov-form-file[expanded="1"][disabled=true i] .gov-form-file__area,.gov-form-file[expanded="1"][disabled="1"] .gov-form-file__area{pointer-events:none;color:var(--gov-form-file-disabled-color, var(--gov-color-secondary-600))}@media (min-width: 30em){.gov-form-file[expanded=""] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded=true i] .gov-form-file__label .gov-form-label__label,.gov-form-file[expanded="1"] .gov-form-file__label .gov-form-label__label{padding:2rem}}';const u=p;const x=class{constructor(i){e(this,i);this.govFocus=o(this,"gov-focus",7);this.govBlur=o(this,"gov-blur",7);this.govFiles=o(this,"gov-files",7);this.govAddFile=o(this,"gov-add-file",7);this.govRemoveFile=o(this,"gov-remove-file",7);this.expanded=false;this.required=false;this.disabled=false;this.displayAttachments=true;this.name=undefined;this.accept=undefined;this.multiple=false;this.maxFileSize=-1;this.identifier=undefined;this.invalid=undefined;this.errorSize="Soubor je větší než povolená velikost {FILE_SIZE}";this.errorAccept="Soubor tohoto typu není povolen";this.attachmentsLabel="Přílohy";this.wcagDescribedBy=undefined;this.wcagLabelledBy=undefined;this.wcagRemoveLabel="Odebrat soubor {FILE_NAME}";this.wcagAttachmentsLabel="Přílohy";this.files=[];this.fileId=r("GovInputFile");this.h=t(this.host);this.f=g(this.h)}watchDisabled(){this.passControlAttrs()}passControlAttrs(){this.f.passAttrToControl("disabled",f(this.disabled));this.f.passAttrToControl("invalid",f(this.invalid));this.f.passAttrToControl("type","File")}registerListeners(){function e(){this.areaRef.classList.add("highlight")}function o(){this.areaRef.classList.remove("highlight")}this.inputRef.addEventListener("change",(e=>{e.preventDefault();e.stopPropagation();const o=e.target.files;this.validateFiles(o)}),false);if(this.expanded){const i=["dragover","dragleave"];const l=["dragenter","dragover","mouseenter"];const a=["dragleave","drop","mouseleave"];i.map((e=>this.inputRef.addEventListener(e,this.preventDefaults.bind(this),false)));l.map((o=>this.inputRef.addEventListener(o,e.bind(this),false)));a.forEach((e=>this.inputRef.addEventListener(e,o.bind(this),false)));this.areaRef.addEventListener("drop",this.handleDrop.bind(this),false)}}preventDefaults(e){e.preventDefault();e.stopPropagation()}handleDrop(e){const o=e.dataTransfer;this.validateFiles(o.files)}validateFiles(e){let o=[];Array.from(e).map((e=>{const i=this.files.find((o=>o.file.name===e.name&&o.file.size===e.size))||null;if(i===null){const i=typeof this.maxFileSize==="number"&&this.maxFileSize>0?c(e,this.maxFileSize):true;const l=b(e,this.accept);const a={id:r("GovFormFile"),file:e,acceptValid:l,sizeValid:i};if(this.displayAttachments){this.files=[...this.files,a]}else{o=[...o,a]}this.govAddFile.emit({component:h.root,file:a})}}));this.govFiles.emit({component:h.root,files:o.length?o:this.files})}componentWillLoad(){this.f.passAttrToLabel("required",String(this.required));this.watchDisabled()}async componentDidRender(){if(m()){await v(500);await this.validateWcag()}this.registerListeners()}render(){return i(l,{key:"9d52c076d07b022f8f922936d4f3a154f806beb8",class:this.h.classes([h.root]),invalid:s(this.invalid),expanded:s(this.expanded)},i("div",{key:"f64f084fda2b09837c0f397a70f35f388ac8e823",class:h.area,ref:e=>this.areaRef=e},i("slot",{key:"03dbcef43eb104a48e82f8a8d94c835a1f9f95ad"}),i("input",{key:"af12fb99fc43592d57f975f7183ef674a4f19c99",class:h.input,ref:e=>this.inputRef=e,id:this.identifier||this.fileId,type:"file",name:this.name,accept:this.accept,multiple:this.multiple,onChange:this.onChangeHandler.bind(this),onFocus:this.onFocusHandler.bind(this),onBlur:this.onBlurHandler.bind(this),required:this.required,disabled:this.disabled,"aria-required":s(this.required),"aria-invalid":s(this.invalid),"aria-describedby":this.wcagDescribedBy,"aria-labelledby":this.wcagLabelledBy,"aria-disabled":s(this.disabled)})),this.h.hasSlot("attachments")?i("div",{class:h.attachments},i("slot",{name:"attachments"})):null,this.files.length&&this.displayAttachments?i("div",{class:h.attachments},i("gov-attachments",{label:this.wcagAttachmentsLabel,"wcag-label":this.wcagAttachmentsLabel},this.files.map((e=>i("gov-attachments-item",{"wcag-remove-labelled-by":e.id,"on-gov-remove":()=>this.onRemoveFileHandler(e)},i("span",{class:"sr-only",id:e.id},this.wcagRemoveLabel.replace("{FILE_NAME}",e.file.name)),e.file.name,e.acceptValid===false?i("gov-form-message",{slot:"message",variant:"error"},i("gov-icon",{slot:"icon",name:"exclamation-triangle-fill"}),e.acceptValid===false?this.errorAccept:null):null,e.sizeValid===false?i("gov-form-message",{slot:"message",variant:"error"},i("gov-icon",{slot:"icon",name:"exclamation-triangle-fill"}),this.errorSize.replace("{FILE_SIZE}",_(this.maxFileSize))):null,i("span",{slot:"info"},"(",_(e.file.size),")")))))):null)}onRemoveFileHandler(e){const o=this.files.findIndex((o=>o.id===e.id));if(o!==-1){const e=this.files;const i=this.files[o];e.splice(o,1);this.files=[...e];this.govRemoveFile.emit({component:h.root,file:i});this.govFiles.emit({component:h.root,files:e})}}onFocusHandler(e){e.stopPropagation();this.govFocus.emit({component:h.root,originalEvent:e})}onBlurHandler(e){e.stopPropagation();this.govBlur.emit({component:h.root,originalEvent:e})}onChangeHandler(e){e.stopPropagation()}async getRef(){return this.inputRef}async getAreaRef(){return this.areaRef}async reset(){this.files=[]}async validateWcag(){n(this.wcagDescribedBy,"wcag-described-by",h.root);n(this.wcagLabelledBy,"wcag-labelled-by",h.root);d(this.identifier||this.fileId,this.wcagLabelledBy,h.root)}get host(){return a(this)}static get watchers(){return{disabled:["watchDisabled"],invalid:["watchDisabled"]}}};x.style=u;export{x as gov_form_file};
//# sourceMappingURL=p-67aa21e9.entry.js.map