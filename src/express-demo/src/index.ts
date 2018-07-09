import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import * as bodyParser from "body-parser";
import TYPES from "./constant/types";
import "./controller/home";
import "./controller/user";
import { UserService } from "./service/user";

let containter = new Container();
containter.bind<UserService>(TYPES.UserService).to(UserService);
let test = containter.resolve(UserService);
console.log(test, 1111111);

let server = new InversifyExpressServer(containter);

server.setConfig(app => {
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000);

console.log("Server started on port 3000 :)");
