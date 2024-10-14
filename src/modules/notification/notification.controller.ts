import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { sendEmailDto } from './mail.interface';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notifService: NotificationService) {}

  @Get()
  getNotification(): string {
    return `notification services callled`;
  }
  @Post('send')
  async sendEmail(@Body() dto: sendEmailDto) {
    // const { to, subject, text } = body;
    // await this.notifService.sendEmail(to, subject, text);
    // return { message: `email sent successfully` };
    // const dto: sendEmailDto = {
    //   from: {
    //     name: 'Anjani(server)',
    //     address: 'anjani.das@forestlaketech.com',
    //   },
    //   recipients: [
    //     { name: 'anjani', address: 'anjani.das@forestlaketech.com' },
    //   ],
    //   subject: 'luckies winner',
    //   text: 'you are also a lucky winner',
    // };
    return this.notifService.sendEmail(dto);
  }
}
