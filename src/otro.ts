import { Injectable, Res } from '@nestjs/common';
import { resolve } from 'path';
const PDFDocument = require('pdfkit-table');

@Injectable()
export class AppService2 {
  private alumnos = [
    { id: 1, nombre: "JEAN PIERRE", nota: "20" },
    { id: 2, nombre: "VALE", nota: "10" },
    { id: 3, nombre: "JHOAN", nota: "05" },
  ];

  async generarPDF(@Res() res:any,id:any){
    const doc = new PDFDocument();
    const rtx = this.alumnos.find((alumno) => alumno.id == id);
    
    doc.fontSize(12).text('Lista de Alumnos y Notas\n\n');
  
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}\n\n`);
      doc.text(`Nota: ${rtx.nota}`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}\n\n`);
      doc.text(`Nombre: ${rtx.nombre}`);
      doc.text(`Nota: ${rtx.nota}`);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename=${rtx.nombre}.pdf`);
  
      doc.pipe(res);
      doc.end();

  
  }
}
