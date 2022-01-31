import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { HelloWorldService } from '../service/hello-world.service'

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  welcomeMessage = ''

  constructor(private route: ActivatedRoute, private router: Router, private helloWorldService: HelloWorldService) {}

  ngOnInit() {
    this.helloWorldService.executeHelloWorldService().subscribe((res) => {
      this.welcomeMessage = res.content
    })
  }
}
