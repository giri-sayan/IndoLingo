import { HINDI_FALOU_CONVERSATIONS } from './hindi';
import { TAMIL_FALOU_CONVERSATIONS } from './tamil';
import { TELUGU_FALOU_CONVERSATIONS } from './telugu';
import { BENGALI_FALOU_CONVERSATIONS } from './bengali';
import { KANNADA_FALOU_CONVERSATIONS } from './kannada';
import { MALAYALAM_FALOU_CONVERSATIONS } from './malayalam';
import { MARATHI_FALOU_CONVERSATIONS } from './marathi';
import { PUNJABI_FALOU_CONVERSATIONS } from './punjabi';
import { GUJARATI_FALOU_CONVERSATIONS } from './gujarati';

export {
  HINDI_FALOU_CONVERSATIONS,
  TAMIL_FALOU_CONVERSATIONS,
  TELUGU_FALOU_CONVERSATIONS,
  BENGALI_FALOU_CONVERSATIONS,
  KANNADA_FALOU_CONVERSATIONS,
  MALAYALAM_FALOU_CONVERSATIONS,
  MARATHI_FALOU_CONVERSATIONS,
  PUNJABI_FALOU_CONVERSATIONS,
  GUJARATI_FALOU_CONVERSATIONS
};

// Default export for generic references
export const FALOU_CONVERSATIONS = HINDI_FALOU_CONVERSATIONS;

export function getFalouConversationsForLanguage(langId) {
  switch (langId) {
    case 'tamil':
      return TAMIL_FALOU_CONVERSATIONS;
    case 'telugu':
      return TELUGU_FALOU_CONVERSATIONS;
    case 'bengali':
      return BENGALI_FALOU_CONVERSATIONS;
    case 'kannada':
      return KANNADA_FALOU_CONVERSATIONS;
    case 'malayalam':
      return MALAYALAM_FALOU_CONVERSATIONS;
    case 'marathi':
      return MARATHI_FALOU_CONVERSATIONS;
    case 'punjabi':
      return PUNJABI_FALOU_CONVERSATIONS;
    case 'gujarati':
      return GUJARATI_FALOU_CONVERSATIONS;
    case 'hindi':
    default:
      return HINDI_FALOU_CONVERSATIONS;
  }
}
