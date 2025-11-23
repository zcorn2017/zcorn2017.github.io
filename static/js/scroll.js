/*!
 * Smooth scroll functionality
 */
;(function () {
  'use strict'

  var SmoothScroll = function (selector, options) {
    this.selector = selector
    this.options = options || {}
    this.speed = this.options.speed || 1000
    this.init()
  }

  SmoothScroll.prototype.init = function () {
    var self = this
    var links = document.querySelectorAll(this.selector)
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = this.getAttribute('href')
        if (href.indexOf('#') !== 0) return
        
        e.preventDefault()
        var target = document.querySelector(href)
        if (!target) return
        
        var targetPosition = target.offsetTop - 70
        var startPosition = window.pageYOffset
        var distance = targetPosition - startPosition
        var startTime = null
        
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime
          var timeElapsed = currentTime - startTime
          var run = ease(timeElapsed, startPosition, distance, self.speed)
          window.scrollTo(0, run)
          if (timeElapsed < self.speed) requestAnimationFrame(animation)
        }
        
        function ease(t, b, c, d) {
          t /= d / 2
          if (t < 1) return c / 2 * t * t + b
          t--
          return -c / 2 * (t * (t - 2) - 1) + b
        }
        
        requestAnimationFrame(animation)
      })
    })
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = SmoothScroll
  } else {
    window.SmoothScroll = SmoothScroll
  }
})()

