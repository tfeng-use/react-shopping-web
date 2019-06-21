interface clipboardDataTypes {
  setData: (text:string, value: any)=>any
}


declare global {
  interface Window {
    clipboardData: clipboardDataTypes
  }
}