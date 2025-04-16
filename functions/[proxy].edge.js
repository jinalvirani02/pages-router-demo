export default function handler(request, context) {
    console.log(JSON.stringify(request))
    console.log(JSON.stringify(context))
    return fetch(request);
  }