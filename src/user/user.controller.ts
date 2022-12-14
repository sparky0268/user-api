import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.userService.findOne(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(name, updateUserDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.userService.remove(name);
  }
}
