import { error } from "console";
import { resolve } from "path";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = { year: 'numeric' as const, month: 'short' as const };
  return date.toLocaleString('en-US', options);
};

function timeAgo(time: string): string {
  const now = new Date();
  const postDate = new Date(time);
  const diff = now.getTime() - postDate.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else {
    return `${months} months ago`;
  }
}

// ✅ Properly typed to avoid 'unknown' in consuming code
const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const formatInterviewTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};

function openBase64PDF(base64String: string): void {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/pdf' });
  const blobURL = URL.createObjectURL(blob);
  window.open(blobURL, '_blank');
}

export {
  formatDate,
  timeAgo,
  getBase64,
  formatInterviewTime,
  openBase64PDF,
};
