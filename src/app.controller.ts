import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AppService2 } from './otro';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly appService2: AppService2) {}

  @Get()
  main(){
    return "WELCOME"
  }
  @Get("pdf")
  async generarPdf(@Res() res:any){
    try{
    await this.appService.generarPDF(res);
    }catch(err){
      console.log(err)
    }
  }

  @Get("pdf2")
  async generarPdf2(@Res() res:any, @Query('id') id: any){
    try{
    await this.appService2.generarPDF(res, id);
    }catch(err){
      console.log(err)
    }
  }
}
