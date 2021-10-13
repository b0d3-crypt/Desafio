import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ContaRead2DataSource} from './conta-read2-datasource';
import { Conta } from './../conta.model'

@Component({
  selector: 'app-conta-read2',
  templateUrl: './conta-read2.component.html',
  styleUrls: ['./conta-read2.component.css']
})
export class ContaRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Conta>;
  dataSource: ContaRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'saldo'];

  constructor() {
    this.dataSource = new ContaRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
