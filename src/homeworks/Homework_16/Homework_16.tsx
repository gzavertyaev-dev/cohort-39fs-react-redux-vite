import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import Feedback from "components/Feedback/Feedback"

import { PageWrapper } from "./styles"

function Homework_16() {
  const dispatch = useAppDispatch()
  const likes = useAppSelector(feedbackSliceSelectors.likes)
  const dislikes = useAppSelector(feedbackSliceSelectors.dislikes)

  const onLike = () => {
    // метод like() - это actionCreator, который создает action
    console.log(feedbackSliceActions.like())
    dispatch(feedbackSliceActions.like())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <PageWrapper>
      <Feedback
        like={likes}
        dislike={dislikes}
        onDislike={onDislike}
        onLike={onLike}
        resetResults={resetResults}
      />
    </PageWrapper>
  )
}

export default Homework_16
