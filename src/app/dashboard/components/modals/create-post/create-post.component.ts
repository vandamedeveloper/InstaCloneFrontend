import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/shared/models/UserProfile';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  @Output() onMediaSelected = new EventEmitter<{
    image: File;
    message: string;
  }>();
  @Input() user: UserProfile;
  fileSelected: string;
  settingsEnabled: boolean = false;
  form: FormGroup;

  constructor(private _fBuillder: FormBuilder) {}

  getImagePreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Mostrar la vista previa de la imagen (opcional)
        this.fileSelected = e.target.result;
        // Establecer la imagen en el campo de imagen del formulario
        this.form.get('image').setValue(file);
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
    this._initializeForm();
  }

  _initializeForm() {
    this.form = this._fBuillder.group({
      image: [null],
      message: [null],
    });
  }

  goToSelectImage() {
    this.fileSelected = null;
    this.settingsEnabled = false;
    this.form.reset();
  }

  goToSettingsPost() {
    this.settingsEnabled = true;
  }

  onPublish() {
    if (this.form.valid) {
      const { image, message } = this.form.value;
      this.onMediaSelected.emit({ image, message });
    }
  }
}
