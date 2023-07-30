import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SigninDTO } from './dtos/signin.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  async signin(@Body() body: SigninDTO) {
    return this.authenticationService.signin(body.email, body.password);
  }
}
