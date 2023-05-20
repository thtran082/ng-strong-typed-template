import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "ng-template[appHeader]"
})
export class HeaderDirective<T> {

  constructor(public templateRef: TemplateRef<T>) {
  }

  static ngTemplateContextGuard<TContext extends object>(dir: HeaderDirective<Context<TContext>>, context: unknown)
    : context is Context<TContext> {
    return true;
  }
}

export interface Context<TItem extends object> {
  $implicit: TItem[];
  appHeader: TItem[];
}
