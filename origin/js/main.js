const apiHost = "http://api.sample.com"
const headers = {
  'Content-Type': 'application/json'
}
const executeGet = async () => {
  const dom = document.querySelector('#execute-get > .result')
  const response = await fetch(
    apiHost + '/api/hello',
    {
      method: 'GET',
      headers
    }
  )
  const data = await response.json()
  dom.innerHTML = JSON.stringify(data)
}

const executePost = async () => {
  const dom = document.querySelector('#execute-post > .result')
  const response = await fetch(
    apiHost + '/api/hello',
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        id: 1,
        name: 'shiro'
      })
    }
  )
  const data = await response.json()
  dom.innerHTML = JSON.stringify(data)
}

const executeGetCookie = async () => {
  const dom = document.querySelector('#execute-get-cookie > .result')
  const response = await fetch(
    apiHost + '/api/cookie',
    {
      method: 'GET',
      credentials: 'include',
      headers
    }
  )
  const data = await response.json()
  dom.innerHTML = JSON.stringify(data)
}

const executePostCookie = async () => {
  const dom = document.querySelector('#execute-post-cookie > .result')
  const response = await fetch(
    apiHost + '/api/cookie',
    {
      method: 'POST',
      credentials: 'include',
      headers
    }
  )
  const data = await response.json()
  dom.innerHTML = JSON.stringify(data)
}
