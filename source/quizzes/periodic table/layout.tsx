import { DefaultFeedbackRenderer, TrainingHistoryPanel } from "../../defaultQuizLayout"
import { QuizLayoutProps } from "../../quiz"
import { TextRenderer } from "../../renderers/TextRenderer"
import { AutofillEnumFetcher } from "../../response fetchers/autofill enum fetcher"
import { PeriodicTable } from "./answer key"

const possibleResponses = new Set(
	Array.from(PeriodicTable.answerKey.values(), element => element.name)
)

export function PeriodicTableQuizLayout(
	props: QuizLayoutProps<number, PeriodicTable.Element, string, string>
) {
	return (
		<>
			{/* <TrainingHistoryPanel trainingHistory={props.trainingSessionHistory} /> */}

			<article
				style={{
					'display': "flex",
					'flex-direction': "column",
					'align-items': "center",
				}}
			>
				<DefaultFeedbackRenderer<string> feedback={props.feedback} />

				<div>
					<TextRenderer
						question={props.question.toString()}
						prompt="Which element has atomic number:"
					/>
				</div>

				<div style={{ margin: "1em" }}>
					<AutofillEnumFetcher<number, PeriodicTable.Element, string>
					answer={props.answer}
					answerKey={props.answerKey}
					question={props.question}
					setResponse={props.setResponse}
					trainingSessionHistory={props.trainingSessionHistory}
					possibleResponses={possibleResponses}
				/>
				</div>
			</article>
		</>
	)
}
