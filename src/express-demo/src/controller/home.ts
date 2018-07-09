import { controller, httpGet } from "inversify-express-utils";

@controller("/")
export class HomeController {
  @httpGet("/")
  public get(): string {
    return "<html><div style='color: red'>12</div></html>";
  }
}
