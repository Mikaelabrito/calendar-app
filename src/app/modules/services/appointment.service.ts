import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly storageKey = 'appointments';

  constructor() {}

  private getAppointments(): { date: Date; description: string }[] {
    const appointmentsJson = localStorage.getItem(this.storageKey);
    return appointmentsJson ? JSON.parse(appointmentsJson) : [];
  }

  private saveAppointments(appointments: { date: Date; description: string }[]){
    const appointmentsJson = JSON.stringify(appointments);
    localStorage.setItem(this.storageKey, appointmentsJson);
  }

  registerAppointment(date: Date, description: string): { date: Date; description: string } {
    const appointments = this.getAppointments();
    const newAppointment = { date, description };
    appointments.push(newAppointment);
    this.saveAppointments(appointments);
    return newAppointment;
  }

  getAppointmentsForDay(date: Date): { date: Date; description: string }[] {
    const appointments = this.getAppointments();
    return appointments.filter(
      (appointment) =>
        appointment.date.getFullYear() === date.getFullYear() &&
        appointment.date.getMonth() === date.getMonth() &&
        appointment.date.getDate() === date.getDate()
    );
  }

  getAppointmentsForWeek(date: Date): { date: Date; description: string }[] {
    const appointments = this.getAppointments();
    const startOfWeek = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - date.getDay()
    );
    const endOfWeek = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + (6 - date.getDay())
    );
    return appointments.filter(
      (appointment) =>
        appointment.date >= startOfWeek && appointment.date <= endOfWeek
    );
  }

  getAppointmentsForMonth(date: Date): { date: Date; description: string }[] {
    const appointments = this.getAppointments();
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    );
    return appointments.filter(
      (appointment) =>
        appointment.date >= startOfMonth && appointment.date <= endOfMonth
    );
  }

  removeAppointment(appointment: { date: Date; description: string }): void {
    const appointments = this.getAppointments();
    const index = appointments.findIndex(
      (a) => a.date === appointment.date && a.description === appointment.description
    );
    if (index !== -1) {
      appointments.splice(index, 1);
      this.saveAppointments(appointments);
    }
  }
}
