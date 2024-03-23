import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello everybody meet Moshe';
  }
  getMyHello(): object {
    return {message: 'hi', bye: 'Go away'};

  }

  getMyname(): object{
    return{name:'Maishara'};
  }

  getMyage(): object {
    return {age:'21'};
  }

  getMynumber(): object{
    return {number: '016567777'};
  }
}
