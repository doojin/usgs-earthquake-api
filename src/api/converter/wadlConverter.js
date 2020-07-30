function convertOption (options) {
  return options.map(option => ({
    ...option.$ && {
      ...option.$.value && { value: option.$.value },
      ...option.$.mediaType && { mediaType: option.$.mediaType }
    }
  }))
}

function convertParam (params) {
  return params.map(param => ({
    ...param.$ && {
      ...param.$.name && { name: param.$.name },
      ...param.$.style && { style: param.$.style },
      ...param.$.type && { type: param.$.type },
      ...param.$.default && { default: param.$.default },
      ...param.$.mediaType && { mediaType: param.$.mediaType }
    },
    ...param.option && { option: convertOption(param.option) }
  }))
}

function convertRepresentation (representations) {
  return representations.map(representation => ({
    ...representation.$ && {
      ...representation.$.mediaType && { mediaType: representation.$.mediaType },
      ...representation.$.element && { element: representation.$.element }
    }
  }))
}

function convertResponse (responses) {
  return responses.map(response => ({
    ...response.$ && response.$.status && { status: response.$.status },
    ...response.representation && { representation: convertRepresentation(response.representation) }
  }))
}

function convertRequest (requests) {
  return requests.map(request => ({
    ...request.param && { param: convertParam(request.param) }
  }))
}

function convertMethod (methods) {
  return methods.map(method => ({
    ...method.$ && {
      ...method.$.id && { id: method.$.id },
      ...method.$.name && { name: method.$.name },
      ...method.response && { response: convertResponse(method.response) },
      ...method.request && { request: convertRequest(method.request) }
    }
  }))
}

function convertResourceCollection (resources) {
  return resources.map(resource => ({
    ...resource.$ && resource.$.path && { path: resource.$.path },
    ...resource.method && { method: convertMethod(resource.method) }
  }))
}

function convertResources (resources) {
  return resources.map(resource => ({
    ...resource.$ && resource.$.base && { base: resource.$.base },
    ...resource.resource && { resource: convertResourceCollection(resource.resource) }
  }))
}

function convertApplication (application) {
  return {
    ...application.resources && { resources: convertResources(application.resources) }
  }
}

module.exports = {
  convert (wadlData) {
    return {
      ...wadlData.application && { application: convertApplication(wadlData.application) }
    }
  }
}
