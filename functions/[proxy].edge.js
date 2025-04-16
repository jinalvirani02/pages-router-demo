export default function handler(request, context) {
    console.log(request)
    console.log(context);
    return fetch(request);
  }