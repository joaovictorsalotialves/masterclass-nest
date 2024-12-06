import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaRocketMemberRepository } from './repositories/prisma/prisma-rocket-member-repository';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMemberRepository,
    },
  ],
})
export class AppModule {}
