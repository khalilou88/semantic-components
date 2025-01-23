import { DatePipe, NgClass } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScImagePlaceholder } from '@semantic-components/ui';
import { BehaviorSubject } from 'rxjs';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: Date;
  type?: 'text' | 'image' | 'file';
  attachments?: string[];
  status?: 'sending' | 'sent' | 'failed';
  reactions?: string[];
}

@Component({
  selector: 'app-chat-page',
  imports: [NgClass, DatePipe, FormsModule, ScImagePlaceholder],
  template: `
    <div class="mx-auto flex h-[600px] max-w-xl flex-col rounded-xl border bg-white shadow-lg">
      <!-- Chat Header -->
      <div class="flex items-center justify-between rounded-t-xl bg-gray-100 p-4">
        <div class="flex items-center space-x-3">
          <!-- <img class="size-10 rounded-full" src="/api/placeholder/50/50" alt="Chat Partner" /> -->

          <img
            class="size-10 rounded-full"
            [width]="50"
            [height]="50"
            [text]="'Chat Partner'"
            alt="Chat Partner"
            sc-image-placeholder
          />

          <div>
            <h2 class="font-semibold">AI Assistant</h2>
            <p class="text-xs text-gray-500">Online</p>
          </div>
        </div>
        <div class="flex space-x-2">
          <button class="text-gray-500 transition-colors hover:text-red-500" (click)="clearChat()">
            Clear Chat
          </button>
        </div>
      </div>

      <!-- Messages Container -->
      <div class="grow space-y-4 overflow-y-auto bg-gray-50 p-4" #chatContainer>
        @for (message of messages; track message) {
          <div
            class="mb-3"
            [ngClass]="{
              'flex justify-end': message.sender === 'user',
              'flex justify-start': message.sender !== 'user',
            }"
          >
            <div
              class="group relative max-w-[70%] rounded-lg p-3"
              [ngClass]="{
                'bg-blue-500 text-white': message.sender === 'user',
                'bg-gray-200': message.sender === 'bot',
                'bg-gray-100 italic': message.sender === 'system',
              }"
            >
              {{ message.text }}
              <!-- Timestamp & Status -->
              <div class="mt-1 flex justify-between text-xs text-opacity-70">
                <span>
                  {{ message.timestamp | date: 'shortTime' }}
                </span>
                @if (message.status) {
                  <span class="ml-2">
                    {{ message.status }}
                  </span>
                }
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Message Input Area -->
      <div class="flex items-center space-x-2 border-t p-4">
        <input
          class="grow rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          [(ngModel)]="newMessage"
          (keyup.enter)="sendMessage()"
          placeholder="Type a message..."
        />
        <button
          class="rounded-lg bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
          (click)="sendMessage()"
        >
          Send
        </button>
        <button
          class="text-gray-500 transition-colors hover:text-blue-500"
          (click)="triggerFileUpload()"
        >
          📎
        </button>
        <input class="hidden" #fileInput (change)="onFileSelected($event)" type="file" />
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChatPage implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') private readonly chatContainer!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  messages: Message[] = [];
  newMessage = '';
  private readonly messageSubject = new BehaviorSubject<Message[]>([]);

  ngOnInit() {
    this.addSystemMessage('Welcome to the chat! Feel free to send a message.');
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const userMessage: Message = {
      id: this.generateUniqueId(),
      text: this.newMessage,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending',
    };

    this.messages.push(userMessage);
    this.newMessage = '';

    // Simulate bot response
    setTimeout(() => {
      userMessage.status = 'sent';
      this.addBotResponse(userMessage.text);
    }, 1000);
  }

  addBotResponse(userText: string) {
    const botMessage: Message = {
      id: this.generateUniqueId(),
      text: `Echo: ${userText}`,
      sender: 'bot',
      timestamp: new Date(),
    };

    this.messages.push(botMessage);
  }

  addSystemMessage(text: string) {
    const systemMessage: Message = {
      id: this.generateUniqueId(),
      text,
      sender: 'system',
      timestamp: new Date(),
    };

    this.messages.push(systemMessage);
  }

  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileMessage: Message = {
        id: this.generateUniqueId(),
        text: `Uploaded file: ${file.name}`,
        sender: 'user',
        timestamp: new Date(),
        type: 'file',
        attachments: [URL.createObjectURL(file)],
      };

      this.messages.push(fileMessage);
    }
  }

  clearChat() {
    this.messages = [];
    this.addSystemMessage('Chat cleared. Start a new conversation.');
  }

  private scrollToBottom() {
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
