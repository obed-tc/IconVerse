import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconService } from 'src/app/core/services/icon.service';
import * as Prism from 'prismjs';  
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-icon-sidebar',
  templateUrl: './icon-sidebar.component.html',
  styleUrls: ['./icon-sidebar.component.css']
})
export class IconSidebarComponent {
  @Input() urlNameIcon="";
  @Input() nameIcon="";
  @Output() closeModal = new EventEmitter<void>();

  code="";
  svgContentString="";
  svgContent: SafeHtml = ""; 
  iconColor = 'currentColor'; // Color predeterminado

  backgroundColor = 'bg-white'; // Color de fondo predeterminado

  close() {
    this.closeModal.emit();  
  }
  constructor(private iconService: IconService,private sanitizer: DomSanitizer) { 
  

  }
  setIconColor(color: string) {
    this.iconColor = color; // Cambia el color del ícono
  }

  setBackgroundColor(colorClass: string) {
    this.backgroundColor = colorClass; // Cambia el color de fondo
  }

  ngOnInit():void{
    console.log(this.urlNameIcon)
    this.code=`<svg-icon 
  src="assets/icons/icon-`+this.nameIcon+`.svg">
</svg-icon>`
    this.iconService.getSvgContent(this.urlNameIcon).subscribe(
      data => {

const modifiedSvg = this.addFillToSvg(data);


        this.svgContentString = modifiedSvg.toString(); 

        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(modifiedSvg);


        console.log(data);  

        setTimeout(() => {
          Prism.highlightAll();
        }, 0);
      },
      error => {
        console.error('Error al obtener el SVG:', error);
      }
    );
    console.log("ON init")

  }
  ngAfterViewInit() {
    console.log("Se termino de renderizar")
    Prism.highlightAll();
  }
  private addFillToSvg(svg: string): string {
    return svg.replace(/<svg([^>]*)>/, '<svg$1 fill="currentColor">');
  }

  exportSvgContent(): void {
    const svgContent = this.svgContentString; 
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `icon-${this.nameIcon}.svg`; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Libera el objeto URL
  }
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Copiado")
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }
}
