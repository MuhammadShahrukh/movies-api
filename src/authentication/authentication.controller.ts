import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SigninDTO } from './dtos/signin.dto';
import { SignupDTO } from './dtos/signup.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('signin')
  async signin(@Body() body: SigninDTO) {
    return this.authenticationService.signin(body.email, body.password);
  }

  @Post('signup')
  async signup(@Body() body: SignupDTO) {
    return this.authenticationService.signup(body);
  }
}
