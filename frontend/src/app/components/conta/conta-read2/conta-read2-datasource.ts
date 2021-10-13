import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Conta } from './../conta.model'



const EXAMPLE_DATA: Conta[] = [
  {id: 1, nome: 'Hydrogen', saldo: 9.99},
  {id: 2, nome: 'Helium', saldo: 9.99},
  {id: 3, nome: 'Lithium', saldo: 9.99},
  {id: 4, nome: 'Beryllium', saldo: 9.99},
  {id: 5, nome: 'Boron', saldo: 9.99},
  {id: 6, nome: 'Carbon', saldo: 9.99},
  {id: 7, nome: 'Nitrogen', saldo: 9.99},
  {id: 8, nome: 'Oxygen', saldo: 9.99},
  {id: 9, nome: 'Fluorine', saldo: 9.99},
  {id: 10, nome: 'Neon', saldo: 9.99},
  {id: 11, nome: 'Sodium', saldo: 9.99},
  {id: 12, nome: 'Magnesium', saldo: 9.99},
  {id: 13, nome: 'Aluminum', saldo: 9.99},
  {id: 14, nome: 'Silicon', saldo: 9.99},
  {id: 15, nome: 'Phosphorus', saldo: 9.99},
  {id: 16, nome: 'Sulfur', saldo: 9.99},
  {id: 17, nome: 'Chlorine', saldo: 9.99},
  {id: 18, nome: 'Argon', saldo: 9.99},
  {id: 19, nome: 'Potassium', saldo: 9.99},
  {id: 20, nome: 'Calcium', saldo: 9.99},
];

/**
 * Data source for the ContaRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ContaRead2DataSource extends DataSource<Conta> {
  data: Conta[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Conta[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Conta[]): Conta[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Conta[]): Conta[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id!, +b.id!, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/nome columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
