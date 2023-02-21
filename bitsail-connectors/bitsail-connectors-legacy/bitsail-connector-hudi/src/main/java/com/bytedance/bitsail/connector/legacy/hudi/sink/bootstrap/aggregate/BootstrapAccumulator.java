/*
 * Copyright 2022-2023 Bytedance Ltd. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytedance.bitsail.connector.legacy.hudi.sink.bootstrap.aggregate;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * Bootstrap ready task id accumulator.
 */
public class BootstrapAccumulator implements Serializable {
  private static final long serialVersionUID = 1L;

  private final Set<Integer> readyTaskSet;

  public BootstrapAccumulator() {
    this.readyTaskSet = new HashSet<>();
  }

  public void update(int taskId) {
    readyTaskSet.add(taskId);
  }

  public int readyTaskNum() {
    return readyTaskSet.size();
  }

  public BootstrapAccumulator merge(BootstrapAccumulator acc) {
    if (acc == null) {
      return this;
    }

    readyTaskSet.addAll(acc.readyTaskSet);
    return this;
  }
}
