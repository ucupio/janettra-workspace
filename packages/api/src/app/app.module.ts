import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ImageKitMiddleware } from '../middlewares/imageKit';
import { ProductsModule } from '../products/products.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule,
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(upload.single('image'), ImageKitMiddleware)
      .exclude(
        { path: 'api/products', method: RequestMethod.GET },
        'api/products/(.*)'
      )
      .forRoutes('products');
  }
}
