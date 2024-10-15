import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { sendMailDto } from './mail.interface';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notifService: NotificationService) {}

  @Get()
  getNotification(): string {
    return `notification services callled`;
  }
  @Post('send')
  async sendEmail(@Body() dto: sendMailDto) {
    // const { to, subject, text } = body;
    await this.notifService.sendEmail(dto);
    return { message: `email sent successfully` };
  }
}
