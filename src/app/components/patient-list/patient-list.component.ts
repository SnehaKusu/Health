import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';  // Corrected Import Path
import { Patient } from '../../models/patient.model';  // Ensure this model exists
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data: Patient[]) => {
      this.patients = data;
    }, (error) => {
      console.error('Error fetching patients:', error);
    });
  }
}
