/* Declares the MySynthesiser Audio Worklet Processor */

class MySynthesiser_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.MySynthesiser;
    super(options);
  }
}

registerProcessor("MySynthesiser", MySynthesiser_AWP);
