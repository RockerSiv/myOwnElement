'use strict';
class Element {

    constructor(tag, attributes = '', value = '', parent=document.body, clickHandler ) {
        this.tag = tag;
        this.attributes = attributes;
        this.value = value;
        this.parent = parent;
        this.validateData();
        this.element = this.createNewElement();
        this.element.onclick= clickHandler;
        this.elClasses = this.findClass();
        this.addDefaultClasses();
        this.findAttribute();
        this.setValue();
        this.print();


    }

    setValue() {
        this.addAttribute('value', this.value);
    }

    print() {
        this.parent.appendChild(this.element);
    }

    findClass() {
        let classes = '';
        for (let thisClass of this.attributes.classes) {
            classes += ' ' + thisClass;
        }

        return classes;

    }

    validateData() {

        try {
            if (dataTags.indexOf(this.tag) === -1) {
                throw new Error(`Tag ${this.tag} does not exist!`);
            }

        } catch (er) {
            console.log(`Invalid tag. ${er}`);
        }

    }

    createNewElement() {
        return document.createElement(this.tag);
    }

    addDefaultClasses() {
        console.log(111);
        this.addAttribute('class', this.elClasses)
    }

    findAttribute() {
        for (let key of Object.keys(this.attributes)) {

            if (key !== 'classes') {
                this.addAttribute(key, this.attributes[key]);
            }
        }
    }




     addHTML(html){
        this.element.innerHTML=html;
    }
     addNewClass(newClass){
        this.element.className+=' '+newClass;
    }
     removeClass(badClass){
        this.element.classList.remove(badClass);
    }
    addAttribute(key, value) {
        this.element.setAttribute(key, value);
    }

}
