const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { value } = $input
  if (!value) return

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')

  try {
    const response = await fetch(`/api/ipinfo/${value}`)
    const ipInfo = await response.json()

    if (ipInfo) {
      $results.innerHTML = formatIpInfo(ipInfo)
    }
  } catch (error) {
    console.error(error)
    $results.innerHTML = '<p class="text-red-500">Error fetching IP information</p>'
  } finally {
    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
  }
})

function formatIpInfo (ipInfo) {
  return `
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">IP Information</h3>
            </div>
            <div class="border-t border-gray-200">
                <dl>
                    ${Object.entries(ipInfo).map(([key, value]) => `
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">${key}</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${value}</dd>
                        </div>
                    `).join('')}
                </dl>
            </div>
        </div>
    `
}
