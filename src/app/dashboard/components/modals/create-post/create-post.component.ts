import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  @Output() onMediaSelected = new EventEmitter<File>();
  fileSelected: string;

  getImagePreview(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.fileSelected = reader.result as string);
      reader.readAsDataURL(file);
    }
  }
}
