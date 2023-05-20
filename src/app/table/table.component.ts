import { Component, ContentChildren, OnInit, QueryList, TemplateRef } from "@angular/core";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { HeaderDirective } from "../directives/header.directive";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T extends Record<string, any> = Record<string, any>> implements OnInit {
  readonly headerTemplate: Record<keyof T, TemplateRef<any>> = {} as Record<keyof T, TemplateRef<any>>
  readonly rowTemplate: Record<keyof T, TemplateRef<any>> = {} as Record<keyof T, TemplateRef<any>>

  @ContentChildren(HeaderDirective)
  set headerDirective(headers: QueryList<HeaderDirective<keyof T>>) {
    headers.forEach(header => {
      this.headerTemplate[header.key] = header.templateRef
    })
  }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
