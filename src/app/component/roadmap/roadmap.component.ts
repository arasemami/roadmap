import { Component, OnInit } from '@angular/core';
import { roadmap } from './roadmap-items';
import { RoadmapItem } from './roadmap.model';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  roadmapItems: Array<RoadmapItem> = roadmap.items;
  roadmapContent: RoadmapItem;
  constructor() { }

  ngOnInit(): void {
  }

  showContentOfRoadmap(item) {
    this.roadmapContent = item;
  }

}
