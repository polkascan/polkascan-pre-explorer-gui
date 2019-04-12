/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * block.service.ts
 */

import { Observable, of} from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';

import { Block } from '../classes/block.class';
import { MessageService } from '../services/message.service';



@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class BlockService extends Service<Block> {
    public resource = Block;
    public type = 'block';
    public path = 'system/block';
}

// @Injectable({
//   providedIn: 'root'
// })
// export class BlockService {

//   apiUrl = 'http://127.0.0.1:8000'

//   constructor(private messageService: MessageService, private http: HttpClient) { }

//   getBlocks(): Observable<any[]> {
      
//     return this.http.get<any[]>(`http://127.0.0.1:8000/block/0/`);
//   }

//   getBlockById(id: string): Observable<Block> {
    
//     return this.http.get<Block>(`${this.apiUrl}/block/${id}/`);
//   }

//   getBlockByHash(hash: string): Observable<Block> {
    
//     return this.http.get<Block>(`${this.apiUrl}/block/${hash}/`);
//   }
// }
