export default {
	openAICompletion: async () => {
		{{adaCompletion.run(() => resetWidget("adaResponse",true), () => {})}}
		{{babbageCompletion.run(() => resetWidget("babbageResponse",true), () => {})}}
		{{curieCompletion.run(() => resetWidget("curieResponse",true), () => {})}}
		{{davinciCompletion.run(() => resetWidget("davinciResponse",true), () => {})}}
	}
}

