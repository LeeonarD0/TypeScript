const object: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Key A',
  keyB: 'Key B',
};

object.keyA = 'Change key';
object.keyB = 'Change Key';
object.keyD = 'New Key';
