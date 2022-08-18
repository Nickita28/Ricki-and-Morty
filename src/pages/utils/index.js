export const getLastStrItem = (str,smb) =>{
  const arr = str.split(smb);
  const LastItem = arr.length -1;
    
  return arr[LastItem]
}