import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notifService: NotificationService) {}

  @Get()
  getNotification(): string {
    return `notification services callled`;
  }
  @Post('send')
  async sendEmail(@Body() body: { to: string; subject: string; text: string }) {
    const { to, subject, text } = body;
    await this.notifService.sendEmail(to, subject, text);
    return { message: `email sent successfully` };
  }
}
