import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function typeOrmConfigFactory(
  configService: ConfigService,
): TypeOrmModuleOptions {
  const nodeEnv = configService.get<string>('NODE_ENV');

  return {
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    autoLoadEntities: true,
    synchronize: nodeEnv !== 'production',
    logging: nodeEnv === 'development',
  };
}
