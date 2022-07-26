(function ($) {
    $.fn.timer = function (options) {
        const finalOptions = $.extend({
            message: 'Em breve!',
            hour: '23:59:59'
        }, options)

        const hourTen = $('<span class="digit">').html('0')
        const hourUnity = $('<span class="digit">').html('0')
        const minuteTen = $('<span class="digit">').html('0')
        const minuteUnity = $('<span class="digit">').html('0')
        const secondTen = $('<span class="digit">').html('0')
        const secondUnity = $('<span class="digit">').html('0')

        const timerSeparator = $('<span class="separator">').html(':')
        const minuteSeparator = $('<span class="separator">').html(':')
        const message = $('<span class="message">').html(finalOptions)
        
        $(this).addClass('timer')
        $(this).append(hourTen, hourUnity, timerSeparator, 
            minuteTen, minuteUnity, minuteSeparator, 
            secondTen, secondUnity, message)

            const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
            const targetTime = regex.exec(finalOptions.hour)
            // console.log(targetTime)

            let timer = setInterval(() => {
                const now = new Date()
                const target = new Date()
                target.setHours(targetTime[1])
                target.setMinutes(targetTime[2])
                target.setSeconds(targetTime[3])

                const differenceInMilli = target.getTime() - now.getTime()
                if(differenceInMilli >= 0) {
                    const difference = regex.exec(new Date(differenceInMilli).toISOString())
                    // console.log(difference)

                    hourTen.html(difference[1][0])
                    hourUnity.html(difference[1][1])
                    minuteTen.html(difference[2][0])
                    minuteUnity.html(difference[2][1])
                    secondTen.html(difference[3][0])
                    secondUnity.html(difference[3][1])
                } else {
                    clearInterval(timer)
                }
            }, 1000)

        return this
    }
})(jQuery)