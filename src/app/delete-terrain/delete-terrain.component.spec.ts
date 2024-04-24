import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTerrainComponent } from './delete-terrain.component';

describe('DeleteTerrainComponent', () => {
  let component: DeleteTerrainComponent;
  let fixture: ComponentFixture<DeleteTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTerrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
