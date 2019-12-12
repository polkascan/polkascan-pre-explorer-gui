import { Injectable } from '@angular/core';
import {Autoregister, Service} from 'ngx-jsonapi';
import {CouncilMotion} from '../classes/council-motion.class';

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class CouncilMotionService extends Service<CouncilMotion> {
    public resource = CouncilMotion;
    public type = 'councilmotion';
    public path = 'council/motion';
}
