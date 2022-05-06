import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-videoconsultation',
  templateUrl: './videoconsultation.component.html',
  styleUrls: ['./videoconsultation.component.scss']
})
export class VideoconsultationComponent implements OnInit {
  urlVideoConsultation: SafeResourceUrl;
  loadingBtnEndVideoConsultation = false;
  btnConclude = 'Finalizar';
  showModal = false;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // const { linkSala } = this.localStorage.getData(LOCAL_STORAGE_KEYS.PATIENT_VIDEO_CONSULTATION);
    const link = this.route.snapshot.paramMap.get('linksala');
    const linkReplace = link.replace(/,/g,'/');
    const linkSala = `https://${linkReplace}`;
    console.log('link: ', linkSala);

    if (!linkSala) this.router.navigate(['/nothing']);
    this.urlVideoConsultation = this.sanitizer.bypassSecurityTrustResourceUrl(linkSala);
  }

}
