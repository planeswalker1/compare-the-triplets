# _compare-the-triplets_

#### _array programming challenge, 12.07.2018_

#### By _**planeswalker1**_

## Description

_This repository has been created in order to showcase a programming challenge about arrays completed in JavaScript._

## challenge

Angel and Brian each created one programming problem for fun. A reviewer rates the two challenges, awarding points on a scale from 1 to 10 for three categories: problem clarity, originality, and difficulty.

We define the rating for Angel's challenge to be the triplet _a_ = (_a_[0], _a_[1], _a_[2]), and the rating for Brian's challenge to be the triplet _b_ = (_b_[0], _b_[1], _b_[2]).

Your task is to find their comparison points by comparing _a_[0] with _b_[0],  _a_[1] with _b_[1], and _a_[2] with _b_[2].

* If a[_i_] > b[_i_], then Angel is awarded 1 point.
* If a[_i_] < b[_i_], then Brian is awarded 1 point.
* If a[_i_] = b[_i_], then neither person receives a point.

Comparison points is the total points a person earned.

Given _a_ and _b_, determine their respective comparison points.

For example, _a_ = [1, 2, 3] and _b_ = [3, 2, 1]. For elements 0, Brian is awarded a point because _a_[0] < _b_[0]. For the equal elements _a_[1] and _b_[1], no points are earned. Finally, for elements 2, _a_[2] > _b_[2] so Angel receives a point. Your return array would be [1, 1] with Angel's score first and Brian's second.

**Function Description**

Create a function that returns an array of two integers, the first being Angel's score and the second being Brian's.

This function has the following parameter(s):

* a: an array of integers representing Angel's challenge rating
* b: an array of integers representing Brian's challenge rating

**Input Format**

The first line contains 3 space-separated integers, _a_[0], _a_[1], and _a_[2], describing the respective values in triplet _a_.

The second line contains 3 space-separated integers, _b_[0], _b_[1], and _b_[2], describing the respective values in triplet _b_.

**Constraints**

* 1 <= a[_i_] <= 10
* 1 <= b[_i_] <= 10

**Output Format**

Return an array of two integers denoting the respective comparison points earned by Angel and Brian.

**Sample Input**

```
4 6 8
5 6 7
```

**Sample Output**

```
1 1
```

**Explanation**

In this example:

* _a_ = (_a_[0], _a_[1], _a_[2]) = (4, 6, 8)
* _b_ = (_b_[0], _b_[1], _b_[2]) = (5, 6, 7)

Now, let's compare each individual score:

* _a_[0] < _b_[0], so Brian receives 1 point.
* _a_[1] = _b_[1], so nobody receives a point.
* _a_[2] > _b_[2], so Angel receives 1 point.

Angel's comparison score is 1, and Brian's comparison score is 1. Thus, we return the array [1, 1].

## Setup/Installation Requirements

* _Clone repository_
* _Navigate to the cloned repository_
* _open main.js with code editor of choice to see my solution_

## Known Bugs

_I don't think there are any bugs_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns contact me at daniel.munozdev@gmail.com_

## Technologies Used

_JavaScript_
