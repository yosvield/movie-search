import {Injectable} from '@angular/core';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class PaginatorIntlService extends MatPaginatorIntl {
  ofLabel = 'of';

  constructor(public translate: TranslateService) {
    super();

    this.translate.onLangChange.subscribe((e: Event) => {
      this.getAndInitTranslations();
    });

    this.getAndInitTranslations();
  }

  getAndInitTranslations() {
    this.translate.get(['LABEL.NEXT_PAGE', 'LABEL.PREVIOUS_PAGE', 'LABEL.OF']).subscribe(translation => {
      this.nextPageLabel = translation['LABEL.NEXT_PAGE'];
      this.previousPageLabel = translation['LABEL.PREVIOUS_PAGE'];
      this.ofLabel = translation['LABEL.OF'];
      this.changes.next();
    });
  }

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 ${this.ofLabel} ${length}`;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} – ${endIndex} ${this.ofLabel} ${length}`;
  }
}
