import { AngularNotificationService, NotifComponent  } from 'angular-notification-alert';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';



@ViewChild('parent', {read: ViewContainerRef}) target: ViewContainerRef;
private componentRef: ComponentRef<any>;
// inject the service in your constructor class
constructor(private Service: AngularNotificationService,
            private componentFactoryResolver: ComponentFactoryResolver) { }


// or show the notif element when an event fires 
addNotifElement() {
  let setting = {
    width: '300px',
    type: 'danger',
    title: 'this an error message',
    body: '<b>Something went wrong </b> check it out',
    position: 'center',
    duration: 4000,
    background: '#fff'
  };
  this.Service.setProperties(setting);
  const childComponent = this.componentFactoryResolver.resolveComponentFactory( NotifComponent );
  this.componentRef = this.target.createComponent(childComponent);
}